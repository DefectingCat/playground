#include <stdio.h>

int main(void)
{
  /* 64位整数 */
  long long int decNum;

  printf("input a dec number: ");
  scanf("%lld", &decNum);
  /* 转换对应的进制 */
  printf("dec = %lld; octal = %llo, hex = %llx\n", decNum, decNum, decNum);

  return 0;
}