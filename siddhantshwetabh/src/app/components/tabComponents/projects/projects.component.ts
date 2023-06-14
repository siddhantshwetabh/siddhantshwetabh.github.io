import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects = [{
    "name": "DDT",
    "desc": "The DDT (Data Driven Treasury) App is used to process and display information extracted from SWIFT transactions.",
    "myRole": "I displayed neccessary forecasts for (T+5) Days to the user by uploading, extracting, processing the SWIFT messages.",
    "myTasks": [
      " Visualizing information and forecast using Bar Graphs from Chart.js library.",
      " Option to download the table data as PDF and Excel.",
      " Click on a bar from Bar chart to see data for respective date with custom tooltip.",
      " Exported Chart from ChartJS to PDF using jsPDF library."
    ]
  },
  {
    "name": "SROV",
    "desc": " The SROV (Supplier Risk Onboarding Valuation) app is used to onboard a supplier, assess the supplier based on a questionnaire, calculate the risk metrics, categorize them according to the score and display them to a client. ",
    "myRole": "I helped my team develop the entire application. We divided tasks between ourselves and set timelines for each tasks.",
    "myTasks": [
      "Developed an extensive questionnaire screen with auto save answers functionality and resume from the last status",
      "Filtering screen based on multiple factors like score range, type, location etc.",
      "Developed dashboard screen where the average score of categories are displayed using mat-progress-bar",
      "Prepared the Supplier Registration Page with API integrated values as form values.",
      "Developed two seperate flows for Client and Supplier",
    ]
  },
  {
    "name": "LTIVA FINASTRA",
    "desc": " The LTIVA FINASTRA App also called the CFO app is used to display financial metrics of different financial units inside the organisation.",
    "myRole": " Solely created the Web App with grid like view in the dashboard with different charts",
    "myTasks": [
      "Integrated Tableau and Power-BI Reports into Angular",
      "Collaborated with Tableau and Power-BI developer and optimized view of the integrated parts",
      "Developed multiple pages like the Initiate transfer, Transaction History etc."
    ]
  },
  {
    "name": "RM App",
    "desc": " The RM Dashboard is the app which shows the relations between the finanical metrics of Client, Location, Industry, Target and Actual values etc.",
    "myRole": " Created the Web App structure with grid like view in the dashboard with different charts and Tableau  reports",
    "myTasks": [
      "Implemented Apex Charts to visualize the data properly",
      "Integrated Tableau Reports into Angular",
      "Collaborated with Tableau developer and optimized view of the integrated parts",
    ]
  },
  {
    "name": "Swagger Portal",
    "desc": " Swagger Portal App allows development team to visualize and interact with the APIs from the UI. Similar to Postman.",
    "myRole": "Developing the entire applicaiton and communicated from the backend team for APIs and related data",
    "myTasks": [
      "Prepared a Interactive screen using which the user can access the API",
      "Listed all the assets developed under the team under one platform",
      "Listed all main APIs under a particular asset organized accordingly",
    ]
  },
  {
    "name": "PMI_VAS",
    "desc": "Payment Market Infrastructure Value Added Services.",
    "myRole": "Large Application which could demonstrate a payment accross different PMI, different CSM, different locations of different country etc.",
    "myTasks": [
      "Developed Access controlled website, with different role function for User, Admin and Bank Executive",
      "Web page controls based on user roles",
      "Intensive Validations along the Payment pages",
      "Developed a ladder page to show exactly at which page the payment failed"
    ]
  },
  {
    "name": "Service Customer Analytics",
    "desc": " This app enables the user to see the Business Value Metrics",
    "myRole": "My role was to develop the Web Pages to show Customer Relationship, Offering performance, Renewal confidence etc.which will improve customer retention with intelligent recommendation",
    "myTasks": [
      "Implemented Complex Design with access controlled editable textfields"
    ]
  },
  {
    "name": "Simcorp",
    "desc": "Asset and Wealth Management of the Company.",
    "myRole": "Getting dynamic filters from an uploaded excel and place them in the form of grouped chips.",
    "myTasks": [
      "Upload File with required data to filter",
      "Repositionable chips in the side bar",
      "Configuration Manager Screen with very dynamic filter group reposition and filter mechanism."
    ]
  },
    // {
    //   "name": "",
    //   "desc": "",
    //   "myRole": "",
    //   "myTasks":[

    //   ]
    // }
  ]
}
