BeforeAll {
    . $PSCommandPath.Replace(".Tests.ps1", ".ps1")
}

# You can test with Pester (https://github.com/pester/Pester)
# TODO: replace with your own tests (TDD), these are just here to demonstrate usage.
Describe "Multi Table Tests" {
    It "Multi Table 5" {
        $res = Multi-Table 5;
        $res | Should -Be "1 * 5 = 5`n2 * 5 = 10`n3 * 5 = 15`n4 * 5 = 20`n5 * 5 = 25`n6 * 5 = 30`n7 * 5 = 35`n8 * 5 = 40`n9 * 5 = 45`n10 * 5 = 50";
    }

    It "Multi Table 1" {
        $res = Multi-Table 1;
        $res | Should -Be "1 * 1 = 1`n2 * 1 = 2`n3 * 1 = 3`n4 * 1 = 4`n5 * 1 = 5`n6 * 1 = 6`n7 * 1 = 7`n8 * 1 = 8`n9 * 1 = 9`n10 * 1 = 10";
    }
}

function seats_in_theater {
    [OutputType([int])]
    Param ([int]$total_col, [int]$total_row, [int]$col, [int]$row)
       if ($total_col -eq 1 -and $total_row -eq 1) {
        return 0
    } 
   return ($total_col-$col+1)*($total_row-$row);
}
---------------------------------------------------------------
function array_plus_array($arr1,$arr2){
   $sum = 0

    foreach ($a in $arr1) {
        $sum += $a
    }

    foreach ($b in $arr2) {
        $sum += $b
    }

    return $sum

}
------------------------------------------------------
function removeChar() {
  local str="$1"
  local length=${#str}
  
  if [ "$length" -le 2 ]; then
    echo ""
  else
    echo "${str:1:length-2}"
  fi
}
removeChar $1
--------------------------------------------------------
function stayHydratred($time){

    return [Math]::Floor($time / 2)

}
-----------------------------------------------
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
--------------------------------------------
function flip {
    param (
        [char] $dir,
        [int[]] $arr
    )
    if ($dir -eq 'R') {
        $arr = $arr | Sort-Object
    } elseif ($dir -eq 'L') {
        $arr = $arr | Sort-Object -Descending
    } else {
        Write-Error "Invalid direction. Use 'R' for ascending or 'L' for descending."
        return
    }
    return $arr
}
-----------------------------------------------
function Multi-Table ([int] $n) {
    return (1..10 | ForEach-Object { "$($_) * $($n) = $($_ * $n)"; }) -join "`n";
}