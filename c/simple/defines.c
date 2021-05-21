#include <stdio.h>
#include <limits.h>
#include <float.h>

int main(void)
{
  printf("Some number limits for this sytem:\n");
  printf("Biggest int: %d\n", INT_MAX);
  printf("Samllest long long: %lld\n", LLONG_MIN);
  printf("One byte = %d bits on this system.\n", CHAR_BIT);
  printf("Largest double: %e\n", DBL_MAX);
  printf("Samllest normal float: %e\n", FLT_MIN);
  printf("Float Precision = %d digits\n", FLT_DIG);
  printf("Float epsilon = %e\n", FLT_EPSILON);

  return 0;
}