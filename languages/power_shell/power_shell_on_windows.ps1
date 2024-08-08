Get-ExecutionPolicy
Set-ExecutionPolicy RemoteSigned
Для тестирования скрипта, вы можете использовать модули и функции PowerShell, такие как Pester. Pester — это модуль для тестирования в PowerShell.
powershell
Copy code
windows from 10 hships with Pester 3.4
----------------------
			Install-Module -Name Pester -Force
Import-Module Pester
			
Напишите тесты в отдельном файле, например, MyScript.Tests.ps1, и выполните их с помощью Pester:
powershell
Copy code
Invoke-Pester -Path .\MyScript.Tests.ps1

Get-Module -ListAvailable -Name Pester


Invoke-Pester -Path .\MyScript.Tests.ps1
Invoke-Pester -Path Test2.ps1

------------------------

 [-] Error occurred in test script '.\Test2.ps1' 7ms
   UnauthorizedAccessException: File C:\4doc\Test2.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
   PSSecurityException: File C:\4doc\Test2.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
   at <ScriptBlock>, C:\Program Files\WindowsPowerShell\Modules\Pester\3.4.0\Pester.psm1: line 297
   at Invoke-Pester, C:\Program Files\WindowsPowerShell\Modules\Pester\3.4.0\Pester.psm1: line 310
   at <ScriptBlock>, <No file>: line 1
--------------------------------   
Set-ExecutionPolicy Unrestricted -Scope CurrentUser
