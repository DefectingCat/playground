/* 计算斐波那契数列 */
#include <stdio.h>

int main(void)
{
  int num, i, c;

  printf("Please enter a number: ");
  scanf("%d", &num);
  long long unsigned int fibos[num + 1]; // 这里要使用超长的正整数
  fibos[0] = 0;
  fibos[1] = 1;

  for (i = 3, c = 0; i <= num; i++, c++)
  {
    fibos[c + 2] = fibos[c] + fibos[c + 1]; // 数组的下一位等于前两位的和
  }

  printf("%llu", fibos[num - 1]);

  return 0;
}