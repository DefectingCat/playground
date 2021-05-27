/* showchar.c -- 按指定的行和列打印字符 */
#include <stdio.h>

void display(char cr, int lines, int width);
int main(void)
{
  int ch;         // 输入字符
  int rows, cols; // 行与列

  printf("Enter a char and tow integers: \n");
  while ((ch = getchar()) != '\n')
  {
    if (scanf("%d %d", &rows, &cols) != 2)  // 当输入不是两个数字时结束程序
    {
      printf("Please enter tow integers.\n");
      break;
    }
    display(ch, rows, cols);  // 传递给 diplay 函数循环打印
    while (getchar() != '\n') // 丢弃 scanf 后的所有字符
    {
      continue;
    }
    printf("Enter another character and tow integers; \n");
    printf("Enter a new line to quit \n");

  }
  printf("Enjoy. \n");
  return 0;
}

void display(char cr, int lines, int width)
{
  int row, col;
  for (row = 1; row <= lines; row++)
  {
    for (col = 1; col <= width; col++)
    {
      putchar(cr);
    }
    putchar('\n');
  }
}