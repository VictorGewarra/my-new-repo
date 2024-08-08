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