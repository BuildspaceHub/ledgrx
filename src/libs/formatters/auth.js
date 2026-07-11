export default function formatErrorMessages(error) {
  const errorMessages = error?.details.reduce((acc, error) => {
    const pathname = error?.path[0];
    acc[pathname] = error?.message;

    return acc;
  }, {});

  return errorMessages;
}
