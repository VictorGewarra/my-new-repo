# Получаем текущие настройки энергосбережения
$powerPlan = powercfg -getactivescheme
$powerSettings = powercfg -q $powerPlan[2]

# Проверяем настройки для сна и гибернации
$sleepSettings = $powerSettings | Select-String "Состояние СПС" | Select-String -Quiet "Включено"
$hibernateSettings = $powerSettings | Select-String "Состояние Гибернация" | Select-String -Quiet "Включено"

# Выводим сообщение о текущих настройках
if ($sleepSettings) {
    Write-Host "Автоматический режим сна из-за неактивности включен."
} else {
    Write-Host "Автоматический режим сна из-за неактивности выключен."
}

if ($hibernateSettings) {
    Write-Host "Автоматическая гибернация из-за неактивности включена."
} else {
    Write-Host "Автоматическая гибернация из-за неактивности выключена."
}
