import $ from 'jquery'

export function queryDb(method, data) {
  // var url = "http://localhost:7001/api/todos"
  var url = "https://wdi-react-todo.herokuapp.com/api/todos"

  if (method === 'get') {
    return $.getJSON(url).then(res => {
      return res
    })
  } else if (method === 'post') {
    return $.ajax({
      type: 'POST',
      url: url,
      data: data,
      dataType: 'json',
    }).then(res => {
      return res
    })
  }
}
