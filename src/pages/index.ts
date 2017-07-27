import angular = require('angular')
import Home from './home'
import TodoList from './todo-list'
import View1 from './home/view1'

export default angular
	.module('pages', [])
	.component('home', Home)
	.component('todolist', TodoList)
	.component('view1', View1)
	.name