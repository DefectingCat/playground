#include <stdio.h>

int main(void)
{
  float speed, size, time;

  printf("Please enter your network speed(Mb/s) and file size(MB):\n");
  scanf("%f %f", &speed, &size);

  time = size * 8 / speed;

  printf("At %.0f megabits per second, a file of %.0f megabytes", speed, size);
  printf("download in %.1f seconds\n", time);

  return 0;
}