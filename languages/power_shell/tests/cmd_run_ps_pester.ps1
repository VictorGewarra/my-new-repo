C:\h_codewars>powershell
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS C:\h_codewars> . .\power_shell\array_plus_array.ps1
PS C:\h_codewars> Get-Command array_plus_array

CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Function        array_plus_array


PS C:\h_codewars> cd tests
PS C:\h_codewars\tests> Invoke-Pester -Path .\array_plus_array.ps1