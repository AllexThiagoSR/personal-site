async function projects(_, response) {
  const token = process.env.ACCESS_API_TOKEN;
  const GITHUB_BASE_URL = 'https://api.github.com/repos/AllexThiagoSR/';
  try {
    const data = await fetch('https://api.vercel.com/v6/deployments', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'get',
    });
    const { deployments } = await data.json();
    let finalList = [];
    for(const { name } of deployments) {
      const { html_url, description, languages_url, homepage } = await( await fetch(GITHUB_BASE_URL + name)).json();
      const languages = await (await fetch(languages_url)).json();
      finalList = [...finalList, { name, url: homepage, githubUrl: html_url, description, languages }];
    }
    response.json(finalList);
  } catch(e) {
    response.json({ message: 'Something went wrong', errorMessage: e.message });
  }
}

export default projects;
