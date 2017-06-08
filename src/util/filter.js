export function timeAgo (datestr) {
  const d = new Date(datestr)
  const between = Date.now() / 1000 - d.getTime() / 1000
  if (between < 3600) {
    return pluralize(~~(between / 60), ' 分钟')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' 小时')
  } else {
    return pluralize(~~(between / 86400), ' 天')
  }
}
export function dateFormat(datestr, pattern) {
  const d = new Date(datestr)
  return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
}

function pluralize (time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label 
}
