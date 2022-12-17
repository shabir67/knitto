function isPalindrome(str: string): boolean {
  str = str.toLowerCase();

  const chars = str.split("").reverse();

  return str === chars.join("");
}

if (isPalindrome("kasurhajiijahrusak")) {
  console.log("kasurhajiijahrusak adalah palindrome.");
}
if (!isPalindrome("joko")) {
  console.log("joko bukan palindrome.");
}
