function registrarYModificarArgumentos(
  method: Function,
  context: ClassMethodDecoratorContext
) {
  return function (...args: any[]) {
    const argsModified = args.map((arg) => {
      typeof arg === "string" ? (arg = arg.toUpperCase()) : arg;
    });

    console.log('Method ${String(context.name)} called with arguments: ${argsModified}');

    return method.apply(context, argsModified);
  };
}

class Saludar {
    @registrarYModificarArgumentos
  saludar(parametro: string) {
    return `Hola ${parametro}`;
  }
}
