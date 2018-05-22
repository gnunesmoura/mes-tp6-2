objetoGenerico.funcaoGenerica(
  '*/10 * * * * *',
  function () {
    axios.get('http://localhost:8083/recovery/poller')
      .then(response => {
        console.log('[http://localhost', response.data)
      })
      .catch(error => {
        console.log('[call get /recovery/poller]', error)
      })
  })
