import { useEffect, useRef } from "react";
type TimeOut = ReturnType<typeof setTimeout>;

/**
 * Хук кеширует загруженные данные
 * @param loadData Функция загрузки данных
 * @param cleanUp Функция очистки данных
 * @param isVisible Признак отображения компонента
 * @param hasData Признак наличия загруженных данных
 * @param timeout Тайммаут после которого данные будут считаться устаревшими
 */
export const useChached = (
  loadData: () => void,
  cleanUp: () => void,
  isVisible: boolean,
  hasData: boolean,
  timeout: number,
) => {
  const timeOut = useRef<TimeOut | null>(null);

  useEffect(() => {
    if (isVisible) {
      if (!hasData) {
        loadData();
      } else {
        timeOut.current && clearTimeout(timeOut.current);
      }
      return () => {
        timeOut.current && clearTimeout(timeOut.current);
        timeOut.current = setTimeout(() => {
          console.log("Clear huge data");
          cleanUp();
        }, timeout);
      };
    }
  }, [isVisible, hasData, timeout]);
};
