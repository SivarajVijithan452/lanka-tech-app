export const formateprice = (amount: number) => {
    return new Intl.NumberFormat
        ('en-US', {
            style: 'currency',
            currency: 'LKR',
        }).format(amount);
}