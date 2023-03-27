# ATM-CLI-walkthrough

A basic cli atm machine, the goal was to depend my understanding of OOP and abstraction

# Key take-aways

Walking through this project with an example of an "ATM" gave me a deeper understanding of getters, setters on an object and the need to private variables.
The code in the main script.js file almost reads like english as abstraction takes the implimentation details and hides them in their own spective place within the code. This level of abstraction also means a user can only interact with the program or OBJECT as intended. Although this does require a little more planning with how data is either structured or handled.

# Things I'd do Differently

- I'd not have stored the accounts as txt files.

- Would have used some level of one way incryption (I've done something similar using bcrypt lib in python)

"compare_input_data_pwd = (bcrypt.checkpw(user_password_input, user_pwd))"
