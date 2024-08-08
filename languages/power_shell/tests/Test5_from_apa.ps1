# Тест 5: Проверка с массивами разной длины
    It "Should handle arrays of different lengths" {
        $array1 = Generate-RandomArray -length (Get-Random -Minimum 1 -Maximum 5) -minValue 1 -maxValue 10
        $array2 = Generate-RandomArray -length (Get-Random -Minimum 1 -Maximum 5) -minValue 1 -maxValue 10
        $expected = ($array1 + $array2) | Measure-Object -Sum | Select-Object -ExpandProperty Sum

        Write-Output "Testing with arrays: $array1 and $array2"

        $result = array_plus_array -array1 $array1 -array2 $array2
        Write-Output "Result: $result"
        Write-Output "Expected: $expected"

        $result | Should -BeExactly $expected

Tests.Should handle arrays of different lengths 7ms (6ms|0ms)
 RuntimeException: Method invocation failed because [System.Object[]] does not contain a method named 'op_Addition'.