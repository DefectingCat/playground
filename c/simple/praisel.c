#include <stdio.h>
#include <string.h>
#define PRAISE "You are an extraodinary being." // 定义常量

int main(void)
{
  char name[40]; // 声明字符串数组

  printf("Please enter your name:");
  scanf("%s", name);
  printf("\nHello, %s. %s\n", name, PRAISE); // 用到两个 %s ，分别打印 name 和常量

  printf("Your name of %zd letters occupies %zd memory cells.\n", strlen(name), sizeof(name));
  printf("The phrase of praise has %zd letters", strlen(PRAISE));
  printf("and occupies %zd memory cells.\n", sizeof(PRAISE));

  return 0;
}