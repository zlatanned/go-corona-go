# go-corona-go
A cli based application to track detailed statistics in tabular fashion about lives affected throughout the world by COVID-19.

Steps To Access:

0. Clone or Download this project.
1. Run npm i
2. Run npm link
3. Sign in to https://rapidapi.com/api-sports/api/covid-193 to get your API Key.
4. Create a .env file in your project folder and set environment for two variables as follows:
            API_KEY=xxxxxxxx
            BASE_URL='https://covid-193.p.rapidapi.com/'
5. Commands: 

      4.1. covid-data (or 'covid-data help') ====> Opens up a Help chart.
      
      4.2. covid-data version  =====> Indicates version of application.
      
      4.3. covid-data history ====> Outputs a List of Countries Affected By COVID-19.
      
      
      4.4. covid-data now <Country Name> ====> Gets detailed statistics of COVID-19 cases for the particular country.
              
              
              example: covid-data now ====> "Default Country Name is set to INDIA".
              
![covid stats: India](https://github.com/zlatanned/go-corona-go/blob/master/screenshots/screenshot-covid-data-now.png)
                       
                       covid-data now Belgium ===> Gets detailed stats for Belgium.
                       
![covid stats: for Belgium](https://github.com/zlatanned/go-corona-go/blob/master/screenshots/screenshot-covid-data-now-belgium.png)
      
      
      
      4.5  covid-data forecast ====> Outputs a Beautiful Message for all of us.
