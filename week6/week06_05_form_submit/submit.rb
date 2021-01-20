require 'sinatra'

get '/' do
  <<-ENDMESSAGE
    <h1>Form Submission Demo</h1>
    <br>
    <a href="/login">Login to see DEMO</a>
  ENDMESSAGE
end

get '/login' do
  puts '================================================================'
  puts 'Form params inside GET: '
  puts '------------'
  puts params
  puts '================================================================'
  erb :login
end

post '/login' do
  puts '================================================================'
  puts 'Form params: '
  puts '------------'
  puts params
  puts '================================================================'

  selected = params[:remember_me] == 'on' ? 'Selected' : 'Unselected'

  <<-ENDMESSAGE
    <h1>Form submitted successfully!</h1>
    <h3>You details:</h3>
    <p>
      <strong>Email:</strong> #{params[:email]}
      <br>
      <strong>Password:</strong> *******
      <br>
      <strong>Remember me:</strong> #{selected}
    </p>
  ENDMESSAGE
end
