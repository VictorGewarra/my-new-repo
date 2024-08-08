. .\power_shell\array_plus_array.ps1

Describe "array_plus_array Tests" {
    It "Should return the sum of two arrays" {
        $array1 = @(1, 2, 3)
        $array2 = @(4, 5, 6)
        $expected = 21

        $result = array_plus_array -array1 $array1 -array2 $array2

        $result | Should -BeExactly $expected
    }

  
}
 