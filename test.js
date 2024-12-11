function test(num){
  if (typeof num === "string") {
    return false
  }
  num++

  return num
}
