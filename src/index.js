
const SlamBookofReks = {
  Name:"rekha",
  PlaceOfBirth:"Kanyakumari",
  FavPlaces:["Chikamagalur", "AthirapalyWatrFalls","Kuderamooka","Bangalore"],
  FavFood:["Curd Rice with Vendaka","Spicy Biriyani","Vanila Icecream","raagi poritge","Tea"],
  Passion:["Farming", "Be with Nature", "Live without being afraid of tomorrow","To be Myself","Buisness"],
  FavPeople:["Strictly_No_Human,Just_God"],
  PeopleComments : function () {
  this.FriendsComment = []
  this.FamilyComment=[]
for (var i =0; i <2; i++){

this.FriendsComment[i]= prompt("enter your comments about rekha")
this.FamilyComment[i]= prompt("enter abt reks")
}
  }
}
SlamBookofReks.PeopleComments()
console.log(SlamBookofReks)