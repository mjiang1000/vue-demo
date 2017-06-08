//cnodeapi

import axios from 'axios'

const urlPre = 'https://cnodejs.org/api/v1'

export function getlist(tab='all', page=1, limit, mdrender=true) {
  
  return axios.get(urlPre + '/topics?tab='+tab+'&page='+page)
}

export function getTopic(id, mdrender=true, accesstoken='') {
  return axios.get(urlPre + '/topic/'+id+'?accesstoken='+accesstoken)
}

export function postTopic(accesstoken='', title='share', content="") {
  return axios.post(urlPre + '/topics', {
  	accesstoken: accesstoken,
  	title : title, tab : tab,
  	content : content
  })
}

export function updateTopic(accesstoken='', topic_id='', title='', tab='',content='') {
  return axios.post(urlPre + '/topics/update', {
  	accesstoken : accesstoken, topic_id : topic_id,
  	title : title, tab : tab, content : content
  })
}


export function topicCollect(accesstoken='', topic_id='') {
  return axios.post(urlPre+'/topic_collect/collect', {
  	accesstoken: accesstoken, topic_id : topic_id
  })
}

export function deCollect(accesstoken='', topic_id='') {
  return axios.post(urlPre + '/topic_collect/de_collect', {
  	accesstoken : accesstoken, topic_id : topic_id
  })
}

export function getCollectList(loginname='') {
  return axios.get(urlPre + '/topic_collect/' + loginname)
}


export function replyCollect(topic_id='', accesstoken='', content='', reply_id='') {
  let postData = {
  	topic_id : topic_id,
  	accesstoken : accesstoken,
  	content : content
  }
  if (reply_id !== '') postData['reply_id'] = reply_id

  return axios.post(urlPre+'/topic/'+topic_id+'/replies', postData)

}

export function replyUp(reply_id='', accesstoken) {
  return axios.post(urlPre + '/reply/' +reply_id+ '/ups', {
  	accesstoken : accesstoken
  })
}

export function getUser(loginname='') {
  return axios.get(urlPre + '/user/'+ loginname)
}

export function tokenCheck(token='') {
  return axios.post(urlPre + '/accesstoken',{ accesstoken : token })
}

export function getMessages(token='') {
  return axios.get(urlPre + '/messages?token='+token)
}

export function getUnreadMessagesCount(token='') {
  return axios.get(urlPre + '/message/count?accesstoken='+token)
}

export function markAllMessage(token='') {
  return axios.post(urlPre + '/message/mark_all', {
  	accesstoken : token
  })
}

export function markSingleMessage(msg_id='' ,token='') {
  return axios.post(urlPre + '/message/mark_one/' + msg_id, {
  	accesstoken : token
  })
}

