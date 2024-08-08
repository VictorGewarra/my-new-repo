function Get-SumOfPositive($NumberArray)
{
  $sum = 0

    foreach ($a in $NumberArray) {
       if ($a  -gt 0) {
         $sum += $a;
       }            
      }  
  return $sum;
}