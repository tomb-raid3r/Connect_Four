board = $("button");

var turn = 0 ;

var p1 = prompt("Enter the name of Player 1 ");
var p2 = prompt("Enter the name of Player 2 ");

var empty = "rgb(0, 0, 0)" , one = "rgb(136, 0, 21)", two =  "rgb(0, 64, 28)";

$('button').click(function(){
    var id = $('button').index(this) ;
    // alert(id);
    var x = 0 ;

    var y = Math.ceil(id % 7) ;

    while( x < 6 )
    {
      id = x * 7 + y ;
      if( board.eq(id).css("background-color") ==  'rgb(0, 0, 0)' );
      else {
        break;
      }
      x++;
    }
    id = (x-1) * 7 + y  ;

    if(board.eq(id).css("background-color") == empty)
    {
      if(!turn)
      {
        board.eq(id).css("background-color",one);
        turn = !turn ;
      }
      else
      {
        board.eq(id).css("background-color",two);
        turn = !turn ;
      }
    }});


function check_one(){
  for( var A = 0 ; A < 6 ; A++ )
  {
    for( var B = 0; B < 7 ; B++ )
    {
      //Player 1 row
      var count1 = 0  ;

      for( var C = 0 ; C < 4 ; C++ )
      {

        if( ( A + C ) * 7 + B >= 42 )break;
        if( board.eq( ( A + C )*7 + B ).css("background-color") == one )
        count1++;
      }
      if( count1 == 4 )
      {
        alert(p1+" is the Winner");
        $(".container").fadeOut("fast");
      }

      //Player 1 collumn
      count1 = 0;
      for( var C = 0 ; C < 4 ; C++ )
      {
          if(  A  * 7 + B + C >= 42 )break;
          if( board.eq(  A * 7 + B + C ).css("background-color") == one )
          count1++;
      }
      if( count1 == 4 )
      {
        alert(p1+" is the Winner");
        $(".container").fadeOut("fast");
      }

      //Player 1 Diagonal
      //Both Plus
      count1 = 0;
      for( var C = 0 ; C < 4 ; C++ )
      {
          if(  (A + C) * 7 + B + C >= 42 )break;
          if( board.eq(  ( A + C ) * 7 + B + C ).css("background-color") == one )
          count1++;
      }

      if( count1 == 4 )
      {
        alert(p1+" is the Winner");
        $(".container").fadeOut("fast");
      }

      //Both MInus
      count1 = 0;
      for( var C = 0 ; C < 4 ; C++ )
      {
          if(  (A - C) * 7 + B - C >= 42 )break;
          if( board.eq(  ( A - C ) * 7 + B - C ).css("background-color") == one )
          count1++;
      }
      if( count1 == 4 )
      {
        alert(p1+" is the Winner");
        $(".container").fadeOut("fast");
      }

      //Plus Minus
      count1 = 0;
      for( var C = 0 ; C < 4 ; C++ )
      {
          if(  (A + C) * 7 + B - C >= 42 )break;
          if( board.eq(  ( A + C ) * 7 + B - C ).css("background-color") == one )
            count1++;
      }

      if( count1 == 4 )
      {
        alert(p1+" is the Winner");
        $(".container").fadeOut("fast");
      }

      //Minus Plus
      count1 = 0;
      for( var C = 0 ; C < 4 ; C++ )
      {
          if(  (A - C) * 7 + B + C >= 42 )break;
          if( board.eq(  ( A - C ) * 7 + B + C ).css("background-color") == one )
            count1++;
      }
      if( count1 == 4 )
      {
        alert(p1+" is the Winner");
        $(".container").fadeOut("fast");
      }
  }
}
}

function check_two(){
  for( var A = 0 ; A < 6 ; A++ )
  {
    for( var B = 0; B < 7 ; B++ )
    {
      //Player 1 row
      var count2 = 0  ;

      for( var C = 0 ; C < 4 ; C++ )
      {

        if( ( A + C ) * 7 + B >= 42 )break;
        if( board.eq( ( A + C )*7 + B ).css("background-color") == two )
        count2++;
      }
      if( count2 == 4 )
      {
        alert(p2+" is the Winner");
        $(".container").fadeOut("fast");
      }

      //Player 1 collumn
      count2 = 0;
      for( var C = 0 ; C < 4 ; C++ )
      {
          if(  A  * 7 + B + C >= 42 )break;
          if( board.eq(  A * 7 + B + C ).css("background-color") == two )
          count2++;
      }
      if( count2 == 4 )
      {
        alert(p2+" is the Winner");
        $(".container").fadeOut("fast");
      }

      //Player 1 Diagonal
      //Both Plus
      count2 = 0;
      for( var C = 0 ; C < 4 ; C++ )
      {
          if(  (A + C) * 7 + B + C >= 42 )break;
          if( board.eq(  ( A + C ) * 7 + B + C ).css("background-color") == two )
          count2++;
      }

      if( count2 == 4 )
      {
        alert(p2+" is the Winner");
        $(".container").fadeOut("fast");
      }

      //Both MInus
      count2 = 0;
      for( var C = 0 ; C < 4 ; C++ )
      {
          if(  (A - C) * 7 + B - C >= 42 )break;
          if( board.eq(  ( A - C ) * 7 + B - C ).css("background-color") == two )
          count2++;
      }
      if( count2 == 4 )
      {
        alert(p2+" is the Winner");
        $(".container").fadeOut("fast");
      }

      //Plus Minus
      count2 = 0;
      for( var C = 0 ; C < 4 ; C++ )
      {
          if(  (A + C) * 7 + B - C >= 42 )break;
          if( board.eq(  ( A + C ) * 7 + B - C ).css("background-color") == two )
            count2++;
      }

      if( count2 == 4 )
      {
        alert(p2+" is the Winner");
        $(".container").fadeOut("fast");
      }

      //Minus Plus
      count2 = 0;
      for( var C = 0 ; C < 4 ; C++ )
      {
          if(  (A - C) * 7 + B + C >= 42 )break;
          if( board.eq(  ( A - C ) * 7 + B + C ).css("background-color") == two )
            count2++;
      }
      if( count2 == 4 )
      {
        alert(p2+" is the Winner");
        $(".container").fadeOut("fast");
      }
  }
}
}

 //$("div").fadeOut("fast");
$('button').click(check_one);
$('button').click(check_two);
