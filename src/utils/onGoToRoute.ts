export const onGoToRoute = (route: string) => {
  const origin = window.location.origin 
  window.location.assign(`${origin}/${route}`);
} 