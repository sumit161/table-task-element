cl=console.log;


var array=[
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

request=document.getElementById('info')
result=" ";

array.forEach(function(parameter,i){
	result+=`<tr>
	        <td>${i+1}</td>
			<td>${parameter.name}</td>
			<td>${parameter.weight}</td>
			<td>${parameter.symbol}</td>
	        </tr>`
	
	
}
)


request.innerHTML=result;


//2
hi=[ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];
   
   request2=document.getElementById('info1')
   
   result2=" ";
   
   hi.forEach(function(parameter2,i){
	   result2+=`<tr>
	           <td>${1+i}</td>
			   <td>${parameter2.author}</td>
			   <td>${parameter2.title}</td>
			   <td>${parameter2.libraryID}</td>
	           </tr>`
	         
   })
   
   request2.innerHTML=result2
   
   
   
   
   
   
   
