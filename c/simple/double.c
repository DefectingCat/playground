#include <stdio.h>

int main(void)
{
  float num;
  int num2;

  printf("input a int num:\n");

  scanf("%d", &num2);

  num = num2 * 3.14;

  printf("this is int num: %d.\n", num2);
  printf("and %f.\n", num);
}