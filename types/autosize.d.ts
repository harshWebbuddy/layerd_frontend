declare module "autosize" {
  function autosize(el: Element | Element[] | NodeList | null): void;
  namespace autosize {
    function update(el: Element | Element[] | NodeList | null): void;
    function destroy(el: Element | Element[] | NodeList | null): void;
  }
  export = autosize;
}
