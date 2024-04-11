const mapValidationIssuesToErrors = (issues) => {
  return issues.map((issue) => ({
    name: issue.path.join('.'),
    message: issue.message,
  }));
};

export const handleValidation = async (req, res, functionValidation) => {
  try {
    const validatedData = await functionValidation(req.body);
    if (!validatedData.success) {
      const {
        error: { issues },
      } = validatedData;
      const errors = mapValidationIssuesToErrors(issues);
      return res.status(400).json({ message: 'Validation errors', errors });
    }
    return validatedData;
  } catch (error) {
    console.error('Internal server error:', error?.meta?.cause);
    return res.status(500).json({ message: error?.meta?.cause });
  }
};
