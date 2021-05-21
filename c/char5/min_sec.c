// min_sec -- 把秒数转换成 时 - 分 - 秒
#include <stdio.h>
#define ONE_MIN 60

int main(void)
{
  const int ONE_HOUR = ONE_MIN * 60;
  int sec, min, hour, left_min, left_sec;

  printf("Convert seconds to hours - minutes - seconds!\n");
  printf("Enter the number of seconds (<=0 to quit): \n");
  scanf("%d", &sec);

  while (sec > 0)
  {
    hour = sec / ONE_HOUR;     // 得到小时
    left_min = sec % ONE_HOUR; // 剩下秒数

    min = left_min / ONE_MIN;      // 得到分钟
    left_sec = left_min % ONE_MIN; // 剩下秒数

    printf("%d hour(s) - %d minute(s) - %d second(s).\n", hour, min, left_sec);

    printf("Convert seconds to hours - minutes - seconds!\n");
    printf("Enter the number of seconds (<=0 to quit): \n");
    scanf("%d", &sec);
  }

  return 0;
}