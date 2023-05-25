async function GET(_, response) {
  const token = process.env.ACCESS_API_TOKEN;
  const githubToken = process.env.GITHUB_API_TOKEN
  const GITHUB_BASE_URL = 'https://api.github.com/repos/AllexThiagoSR/';
  try {
    const data = await fetch('https://api.vercel.com/v6/deployments', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'get',
    });
    const { deployments } = await data.json();
    const finalList = deployments.map(async({ name }) => {
      const {
        html_url,
        description,
        languages_url,
        homepage,
      } = await( await fetch(GITHUB_BASE_URL + name, {
        headers: {
          Authorization: `Bearer ${githubToken}`,
        },
        method: 'get',
      })).json();
      const languages = await (await fetch(languages_url, {
        headers: {
          Authorization: `Bearer ${githubToken}`,
        },
        method: 'get',
      })).json();
      return { name, url: homepage, githubUrl: html_url, description, languages };
    });
    response.json(await Promise.all(finalList));
  } catch(e) {
    response.json({ message: 'Something went wrong', errorMessage: e.message });
  }
}

export default GET;
