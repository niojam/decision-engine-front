function CustomerPersonalCodes() {
  const mockData = [
    {
      personalCode: 49002010965,
      modifier: 'debt',
      text: 'Customer has debt',
    },
    {
      personalCode: 49002010976,
      modifier: 'debt',
      text: 'Customer belongs to segment 1 (credit_modifier = 100)',
    },
    {
      personalCode: 49002010987,
      modifier: 'debt',
      text: 'Customer belongs to segment 2 (credit_modifier = 300)',
    },
    {
      personalCode: 49002010998,
      modifier: 'debt',
      text: 'Customer belongs to segment 3 (credit_modifier = 1000)',
    },
  ];

  return (
    <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">
          Some test data?
        </h2>

        <div className="space-y-8 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-y-0">
          {mockData.map((customer) => (
            <div
              key={`person-mock-${customer.personalCode}`}
              className="sm:flex lg:block"
            >
              <div className="sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-4">
                <p className="block font-semibold not-italic text-gray-900">
                  {`Personal code ${customer.personalCode}`}
                </p>
                <p className="mt-4 text-lg text-gray-600">{customer.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { CustomerPersonalCodes };
