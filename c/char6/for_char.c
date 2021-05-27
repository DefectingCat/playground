/* 利用 for 循环打印 a-z 字母的 ASCII 码 */
#include <stdio.h>

int main(void)
{
  char ch;

  for (ch = 'a'; ch <= 'z'; ch++)
  {
    printf("The ASCII value for %c is %d\n", ch, ch);
  }

  return 0;
}