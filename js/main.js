'use strict';

//constructor function that holds data for different resources presented.
var headline = ['Name' , 'Location' , 'Hours' , 'Phone' , 'E-Mail' , 'Website'];
function ResourceData(name, location, hours, phone, email, link){
  this.name = name;
  this.location = location;
  this.hours = hours;
  this.phone = phone;
  this.email = email;
  this.link = link;
}

//example build out of one resource.... basically building our own database to draw from
// Health Care Benefits Resources

var vaChoice = new ResourceData('Va Choice Act', ' Mail Only: 810 Vermont Avenue, NW Washington DC 20420', '7am-8pm M-F Pacific Time', '866-606-8198', 'N/A', str.link('https://www.va.gov/COMMUNITYCARE/programs/veterans/VCP/index.asp'));
var vaMission = new ResourceData('VA Mission Act of 2018', 'Mail Only: 810 Vermont Avenue, NW Washington DC 20420', '7am-8pm M-F Pacific Time', '866-606-8198', 'N/A', str.link('https://www.va.gov/COMMUNITYCARE/programs/veterans/VCP/index.asp'));
var wasSolHomeOrt = new ResourceData('Washington Soldiers Home Ortiam:30-ng Wa', '1301 Orting Kapowsin Hwy, Orting, WA 98360', '8am-4:30pm M-F', 'Main:(360) 893-4515 Admissions: (877) 838-7787', 'SophieP@dva.wa.gov');-
var NatVetFound = new ResourceData('National Veterans Foundation', '5777 West Century Boulevard, Suite 350, Los Angeles, CA 90045', '9am-5pm M-F Pacific Time', '888-777-4443', 'rich@nvf.org', str.link('https://nvf.org'));
// Mental Health Resources
var vfwMenWell = new ResourceData('VFW Mental Wellness Campaign', '13109 E Mirabeau Parkway, Spokane, WA 99216', '8am-4:30pm M-F (24/7 general redirect)', '509-444-8387', 'cheriknoxcrafts@gmail.com', 'VFW Mental Wellness Campaign');
var vetCrisis = new ResourceData('Veterans Crisis Line', 'N/A', '24 Hours', '1-800-273-8255 (PRESS 1)', 'text - 838255', 'Veterans Crisis Line');
var callCenHomelessVets = new ResourceData('National Call Center for Homeless Vets', 'N/A', '24 Hours', '1-877-424-3838', 'N/A', 'National Call Center for Homeless Vets');

// vetCrisis
var nameEl = document.getElementById('name');
nameEl.textContent = 'Name: ' + vetCrisis.name;
var locEl = document.getElementById('location');
locEl.textContent = 'Location : ' + vetCrisis.location;
var hourEl = document.getElementById('hours');
hourEl.textContent = 'Hours : ' + vetCrisis.hours;
var phEl = document.getElementById('phone');
phEl.textContent = 'Phone : ' + vetCrisis.phone;
var emailEl = document.getElementById('email');
emailEl.textContent = 'Email : ' + vetCrisis.email;
var linkStr = vetCrisis.link;
var url = linkStr.link('https://www.veteranscrisisline.net/?gclid=CjwKCAjw68zZBRAnEiwACw0eYc-Yat9KXcr8YN-JCKYbKBsa5stJgmF_-4QTS9ctcnMUMkG_hkVzNRoCqzYQAvD_BwE');
document.getElementById("link").innerHTML = url;
// callCenHomelessVets
var nameEl = document.getElementById('name');
nameEl.textContent = 'Name: ' + callCenHomelessVets.name;
var locEl = document.getElementById('location');
locEl.textContent = 'Location : ' + callCenHomelessVets.location;
var hourEl = document.getElementById('hours');
hourEl.textContent = 'Hours : ' + callCenHomelessVets.hours;
var phEl = document.getElementById('phone');
phEl.textContent = 'Phone : ' + callCenHomelessVets.phone;
var emailEl = document.getElementById('email');
emailEl.textContent = 'Email : ' + callCenHomelessVets.email;
var linkStr = callCenHomelessVets.link;
var url = linkStr.link('https://www.va.gov/homeless/nationalcallcenter.asp');
document.getElementById("link").innerHTML = url;
//  Substance Abuse Resources
var vaSubAbusePro = new ResourceData('VA Substance Abuse Programs', '9600 Veterans Dr., Lakewood, WA 98493 / 1660 S. Columbian Way, Seattle, WA 98108', '24 Hours', '1-800-273-8255', 'N/A', 'VA Substance Abuse Programs');
var makeConnection = new ResourceData('maketheconnection.net', 'N/A', '24 Hours', 'N/A', 'N/A', str.link('https://maketheconnection.net/'));
var alanon = new ResourceData('Al-Anon.org', '1600 Corporate Landing Parkway, Virginia Beach, VA 23454', '8am-6pm Eastern Standard Time', '(888) 425-2666', 'wso@al-anon.org', str.link('https://al-anon.org'));
// Education Resources
var mgib = new ResourceData('MGIB', 'N/A', '8-8pm', '1-888-442-4551', 'va.gov.mgib@email.com');
var nineEleven = new ResourceData('9/11 GI Bill', 'N/A', '8AM-5PM PST', '1-888-442-4551', 'va.gov.email@email.com');
var vocrehab = new ResourceData('VOC Rehab', 'Jackson Federal Building, 915 2nd Ave, Seattle, WA 98174', '8am-4pm M-F', '800-827-1000', 'N/A', str.link('https://www.benefits.va.gov/vocrehab/edu_voc_counseling.asp'));
// Financial and Legal Resources
var smBusLoans = new ResourceData('VA Small and Veteran Business Programs', '810 Vermone Avenue, NW Washington, DC 20420 Mail Only', '8am-6pm Eastern Standard Time', '866-584-2344', 'osdbu@va.gov', str.link('https://www.va.gov/osdbu/'));
var vaHomeLoan = new ResourceData('VA Home Loan', '1102 Quince St SE, Olympia, WA 98504 Mail Only', '8am-5pm M-F', '800-562-2308', 'N/A', str.link('https://www.benefits.va.gov/homeloans/'));
var vfwLglAss = new ResourceData('VFW Legal Assistance', 'N/A', 'N/A', '877-447-4487', 'N/A', str.link('https://www.va.gov/ogc/legalservices.asp and http://statesidelegal.org/findinghelp'));
// Community Organizations 
var vfwSeattle = new ResourceData('Veterans of Foreign Wars', '2812 NW Market St., Seattle, WA 98107', 'N/A', '206-782-8618', 'vfwseattle@email.com', str.link ('www.vfwseattle.org/'));
var alSeattle = new ResourceData('American Legion', '8201 Lake City Way NE, Seattle, WA 98115', '6:30pm-7:15pm 1st Tuesday of the Month', '(206) 552-0836', 'commander@post206.org', str.link('https://www.legion.org/ and http://www.post206.org/'));
var wwproject = new ResourceData('Wounded Warrior Project', 'N/A', '9am-7pm Eastern Standard Time', '888-997-2586', 'resourcecenter@woundedwarriorproject.org', str.link('https://www.woundedwarriorproject.org/'));
// Employment Resources
var veoact = new ResourceData('Veterans Employment Opportunities Act', 'N/A', 'N/A', 'N/A', 'N/A', str.link('https://www.benefits.va.gov/WARMS/docs/admin28/M28R/Part_VI/pt06_ch08_secA.pdf'));
var vrappointment = new ResourceData('Veterans Recruitment Appointment (VRA)', 'N/A', 'N/A', 'N/A', 'N/A', str.link('https://www.usajobs.gov/Help/working-in-government/unique-hiring-paths/veterans/vra/'));
var vow2hireheroes = new ResourceData('VOW to Hire Heroes Act', '1360 Union Hill Road, Bldg. 2, Suite A, Alpharetta, GA 30004', 'N/A', '844-634-1520', 'vets@hireheroeusa.org', str.link('https://www.benefits.va.gov/vow/ and http://www.hireheroesusa.org/'));
// Homeless Resources
var millionairesClub = new ResourceData('The Millionaires Club - Seattle', '2515 Western Ave, Seattle, WA 98121', '24', '(206) 728-5627', 'N/A', str.link('https://www.millionairclub.org/'));
var vaHomelessOutreach = new ResourceData('VA Homeless Outreach Clinic - Seattle, WA', 'N/A', 'N/A', '(425)-203-7200', 'N/A', str.link('https://www.pugetsound.va.gov/services/homeless/index.asp'));
var compHouAllia = new ResourceData('Compass Housing Alliance - Seattle, WA', '77 S Washington ST, Seattle WA', '8:30am - 5pm', '(206)474-1910', 'N/A', str.link('http://www.compasshousingalliance.org/'));
//code for the object rendering will go into the case for whichever is chosen at the end of our tool.... so case nine-eleven would have the dom manipulation for the object "nineEleven" as listed above... should probably be done to a table for each object property.

var vaChoice = new ResourceData ('Va Choice Act', '810 Vermont Avenue, NW Washington DC, ', 'N/A', '866-606-8198', 'N/A', 'VA CHOICE ACT');
var vaMission =  new ResourceData('VA Mission Act of 2018', 'N/A', 'N/A', 'N/A', 'N/A', 'https://www.va.gov/COMMUNITYCARE/programs/veterans/VCP/index.asp');
var waSoldier = new ResourceData('Washington Soldiers Home Orting Wa', '1301 Orting Kapowsin Hwy, Orting, WA 98360', 'N/A', 'Main:(360) 893-4515 Admissions: (877) 838-7787', 'SophieP@dva.wa.gov');
var naNational = new ResourceData('National Veterans Foundation', 'N/A', 'N/A', 'N/A', 'N/A', 'https://nvf.org');

var nameEl = document.getElementById('name');
nameEl.textContent = 'Name: ' + vaChoice.name;
var locEl = document.getElementById('location');
locEl.textContent = 'Location : ' + vaChoice.location;
var hourEl = document.getElementById('hours');
hourEl.textContent = 'Hours : ' + vaChoice.hours;
var phEl = document.getElementById('phone');
phEl.textContent = 'Phone : ' + vaChoice.phone;
var emailEl = document.getElementById('email');
emailEl.textContent = 'Email : ' + vaChoice.email;
var linkStr = vaChoice.link;
var url = linkStr.link("https://www.va.gov/COMMUNITYCARE/programs/veterans/VCP/index.asp");
document.getElementById("link").innerHTML = url;




// code for the object rendering will go into the case for whichever is chosen at the end of our tool.... so case nine-eleven would have the dom manipulation for the object "nineEleven" as listed above... should probably be done to a table for each object property.


// // we will need dom manip to present ResourceData / object data to a table / page or something
// // based on form input..... could be a function we build for it.


// //function to handle the forms... should iterate through and find the checked box and return its value for usevar e = document.getElementById(next)

var valueIn = null;

// // switch case build for values returned from form
// // 'valueIn' should come from event handler to decide what form was selected.
// // add more cases as needed for the form (there will be a lot)

function queryStart(event){
  event.preventDefault();
  var radios = document.getElementsByClassName('first');
  for (var i = 0; i < radios.length; i++){
    if (radios[i].checked){
      console.log(radios[i].value);

      switch(radios[i].value){

      case 'health':
        document.getElementById('startForm').style.display = 'none';
        document.getElementById('healthForm').style.display = 'block';
        break;

      case 'education':
        console.log('reached switch');
        document.getElementById('startForm').style.display = 'none';
        document.getElementById('edForm').style.display = 'block';
        break;

      case 'financial':
        document.getElementById('startForm').style.display = 'none';
        document.getElementById('finForm').style.display = 'block';
        break;

      case 'community':
        document.getElementById('startForm').style.display = 'none';
        document.getElementById('comOrgForm').style.display = 'block';
        break;

      case 'employment':
        document.getElementById('startForm').style.display = 'none';
        document.getElementById('employAndHome').style.display = 'block';
        break;

      case 'healthCareBen':
        //code here
        break;

      case 'menHealth':
      // VFWMenWell
        var nameEl = document.getElementById('name');
        nameEl.textContent = 'Name: ' + vfwMenWell.name;
        var locEl = document.getElementById('location');
        locEl.textContent = 'Location : ' + vfwMenWell.location;
        var hourEl = document.getElementById('hours');
        hourEl.textContent = 'Hours : ' + vfwMenWell.hours;
        var phEl = document.getElementById('phone');
        phEl.textContent = 'Phone : ' + vfwMenWell.phone;
        var emailEl = document.getElementById('email');
        emailEl.textContent = 'Email : ' + vfwMenWell.email;
        var linkStr = vfwMenWell.link;
        var url = linkStr.link('https://www.va.gov/directory/guide/FindSUDprogram.cfm?program=0&inputaddress=University%20Place,%20WA%2098467,%20USA&statusok=1&latitude=47.204644&longitude=-122.538047&SEARCH_CRITERIA=1&country=us');
        document.getElementById("link").innerHTML = url;
        break;

      case 'subsAbuse':
        var nameEl = document.getElementById('name');
        nameEl.textContent = 'Name: ' + vaSubAbusePro.name;
        var locEl = document.getElementById('location');
        locEl.textContent = 'Location : ' + vaSubAbusePro.location;
        var hourEl = document.getElementById('hours');
        hourEl.textContent = 'Hours : ' + vaSubAbusePro.hours;
        var phEl = document.getElementById('phone');
        phEl.textContent = 'Phone : ' + vaSubAbusePro.phone;
        var emailEl = document.getElementById('email');
        emailEl.textContent = 'Email : ' + vaSubAbusePro.email;
        var linkStr = vaSubAbusePro.link;
        var url = linkStr.link('https://www.va.gov/directory/guide/SUD.asp');
        document.getElementById("link").innerHTML = url;
        break;

      case 'montGi':
      //code here
        break;

      case 'post911':
      //code here
        break;

      case 'vocRehab':
      //code here
        break;

      case 'busLoan':
      //code here
        break;

      case 'homLoan':
      //code here
        break;

      case 'lglSer':
      //code here
        break;

      case 'vfw':
      //code here
        break;

      case 'al':
      //code here
        break;

      case 'wwp':
      //code here
        break;

      case 'veoa':
      //code here
        break;

      case 'vra':
      //code here
        break;

      case 'cha':
      //code here
        break;
      }
    }}}

// // REFACTOR STRETCH: functions to hide form.... i think functions will be ran in the switch case to hide previous form elements. might need one for showing and hiding each individual form group.

// event handler
var submitStart = document.getElementById('startNext');
submitStart.addEventListener('click', queryStart);
