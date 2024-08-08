function Multi-Table ([int] $n) {
    return (1..10 | ForEach-Object { "$($_) * $($n) = $($_ * $n)"; }) -join "`n";
}
-----------------------------------------------------------
  function Multi-Table ([int] $n) {
    (1..10 | ForEach-Object {"$_ * $n = $($_ * $n)"}) -join "`n"
  }
------------------------------------------------------------------
 function Multi-Table ([int] $n) {
    (1..10 | %{"$_ * $n = $($_*$n)"}) -join "`n"
  }
-------------------------------------------------------------
  function Multi-Table ([int] $n) {
    ((1..10) | Foreach-Object {
      "$_ * $n = $($_*$n)"
    }) -Join "`n"
  }
-----------------------------------------------------------
  function Multi-Table ([int] $n) {

    for($i=1; $i -le 10; $i++){
      $output += "{0} * {1} = {2}" -f $i,$n,($i*$n) 
      if($i -le 9){
        $output += "`n" 
      }
    }
    return $output
  }
---------------------------------------------------------------
  function Multi-Table ([int] $n) {
    1..10 | foreach {
      $String += "$_ * $n = " + $_ * $n + "`n" 
    }
    return $String.Trim()
  }

