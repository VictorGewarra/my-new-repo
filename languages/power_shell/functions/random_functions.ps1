# random_functions.ps1
Function Generate-RandomArray {
    param (
        [int]$length = 3,
        [int]$minValue = 0,
        [int]$maxValue = 10
    )
    $random = New-Object System.Random
    $array = @()
    for ($i = 0; $i -lt $length; $i++) {
        $array += $random.Next($minValue, $maxValue)
    }
    return $array
}
