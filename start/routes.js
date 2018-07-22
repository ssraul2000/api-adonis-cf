'use strict'

const Route = use('Route')

Route.resource('user', 'UserController').apiOnly()
Route.post('session', 'SessionController.store')
Route.resource('expenses', 'ExpenseController').apiOnly().middleware('auth')
Route.resource('payments', 'PaymentController').apiOnly().middleware('auth')
Route.resource('sales-product', 'SalesProductController' ).apiOnly()
Route.resource('products', 'ProductController' ).apiOnly()
Route.resource('sale', 'SaleController' ).apiOnly()
