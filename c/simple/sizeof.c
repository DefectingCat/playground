#include <stdio.h>

int main(void)
{
  int num = 123;
  long long int big = 123;
  long double ff = 2.0e10;

  printf("int size is %zd bytes\n", sizeof(int));
  printf("long long int size is %zd bytes\n", sizeof(big));
  printf("long double size is %zd bytes\n", sizeof(ff));

  return 0;
}