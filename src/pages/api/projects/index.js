async function projects(_, response) {
  const token = process.env.ACCESS_API_TOKEN;
  try {
    const data = await fetch('https://api.vercel.com/v6/deployments', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'get',
    });
    response.json(await data.json());
  } catch(e) {
    response.json({ message: 'Something went wrong' });
  }
}

export default projects;
