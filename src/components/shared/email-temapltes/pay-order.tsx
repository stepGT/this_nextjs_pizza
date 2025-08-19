import { FC } from 'react';

interface Props {
  orderID: number;
  totalAmount: number;
  paymentUrl: string;
}

export const PayOrderTemplate: FC<Props> = ({ orderID, totalAmount, paymentUrl }) => (
  <div>
    <h1>Заказ #{orderID}</h1>

    <p>
      Оплатите заказ на сумму <b>{totalAmount} ₽</b>. Перейдите{' '}
      <a href={paymentUrl}>по этой ссылке</a> для оплаты заказа.
    </p>
  </div>
);
