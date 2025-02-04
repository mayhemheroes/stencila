# Stencila R Microkernel

## Installation

On Linux and MacOS, the microkernel is forkable only if the `Cairo` package is available (the `fork` system call is not available on Windows). This is because some graphics backends (e.g. X11) can not be used from within forks. See https://www.cairographics.org/download/ for installation instructions.

## Development

During development it can be useful to manually test / debug the microkernel. You should be able to type lines of R code and get back results e.g.

```console
> Rscript src/r-kernel.r
READY
READY
x <- 1:10
TASK
TASK
plot(x)
{"type":"ImageObject","contentUrl":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAk4AAAJOCAMAAAB2h3jHAAAABlBMVEUAAAD///+l2Z/dAAAACXBIWXMAABcRAAAXEQHKJvM
...
AjJiZCcCMmJkJwIyYmQnAjJiZCcCMmJkJwI/QfMbTv5figlIgAAAABJRU5ErkJggg=="}RESULT
TASK
TASK
EXIT
```
