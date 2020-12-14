# Passo-a-passo da solução:

1. Ordenar a coleção baseado em ordem crescente de hora de início
2. Meter o primeiro intervalo numa lista
3. Para cada intervalo, fazer o seguinte:
* Se o início do intervalo atual for maior que o fim do último intervalo da lista, adicione-o na lista e pronto.
* Senão, como o conjunto está ordenado, o início do intervalo atual só pode ser igual ou maior. Se o fim for maior, atualize o fim do último intervalo da lista.

Assim, os intervalos vão sendo mesclados um por um :)

Para rodar os testes:

```
node test.js
```
