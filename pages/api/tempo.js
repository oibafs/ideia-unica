async function tempo(request,response) {
  const clientId = process.env.CLIENTID;
  const clientSecret = process.env.CLIENTSECRET;
  const dynamicDate = new Date();

  const authentication = await fetch("http://www.strava.com/oauth/authorize?client_id=61144&response_type=code&redirect_uri=http://localhost/exchange_token&approval_prompt=force&scope=activity:read_all");

  const kudoersResponse = await fetch("https://viacep.com.br/ws/13300065/json/");
  const kudoersResponseJson = await kudoersResponse.json();

  response.json({
    date: dynamicDate.toGMTString(),
    kudoers: kudoersResponseJson,
  });
}

export default tempo;