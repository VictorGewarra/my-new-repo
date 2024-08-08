Describe "SumOfPositive Tests" {
    It "Should return 5 when summing [1, 2, 2]" {
        $result = Get-SumOfPositive -NumberArray @(1, -1, 2, 2)
        $result | Should -Be 5
    }

    It "Should return 0 when summing an empty array" {
        $result = Get-SumOfPositive -NumberArray @()
        $result | Should -Be 0
    }
}
