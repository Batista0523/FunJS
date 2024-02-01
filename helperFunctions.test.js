import axios from 'axios';
import {
  getAllItems,
  getItem,
  deleteItem,
  updateItem,
  addItem,
} from './helpersFunctions';

jest.mock('axios');

describe('Helper Functions', () => {
  test('getAllItems should return items on success', async () => {
    const data = { success: true, data: { payload: ['item1', 'item2'] } };
    axios.get.mockResolvedValue({ data });

    const result = await getAllItems();
    expect(result).toEqual(['item1', 'item2']);
  });

  test('getItem should return item with valid id', async () => {
    const id = '123';
    const data = { id: '123', name: 'Item 123' };
    axios.get.mockResolvedValue({ data });

    const result = await getItem(id);
    expect(result).toEqual(data);
  });

  // test('getItem should throw an error with invalid id', async () => {
  //   const id = '456';
  //   axios.get.mockRejectedValue({ response: { data: { success: false } } });
  //   await expect(getItem(id)).rejects.toThrowError('Unexpected response format');
  // });
  

  test('deleteItem should return true on success', async () => {
    const id = '123';
    const data = { success: true };
    axios.delete.mockResolvedValue({ data });

    const result = await deleteItem(id);
    expect(result).toBe(true);
  });

  test('deleteItem should throw an error on failure', async () => {
    const id = '456';
    const data = { success: false };
    axios.delete.mockResolvedValue({ data });

    await expect(deleteItem(id)).rejects.toThrowError('Unexpected response format');
  });

  test('updateItem should return updated item on success', async () => {
    const id = '123';
    const updatedData = { name: 'Updated Item 123' };
    const data = { success: true, data: { payload: updatedData } };
    axios.put.mockResolvedValue({ data });

    const result = await updateItem(id, updatedData);
    expect(result).toEqual(updatedData);
  });

  test('updateItem should throw an error on failure', async () => {
    const id = '456';
    const updatedData = { name: 'Updated Item 456' };
    const data = { success: false };
    axios.put.mockResolvedValue({ data });

    await expect(updateItem(id, updatedData)).rejects.toThrowError('Unexpected response format');
  });

  test('addItem should return added item on success', async () => {
    const newData = { name: 'New Item' };
    const data = { success: true, data: { payload: newData } };
    axios.post.mockResolvedValue({ data });

    const result = await addItem(newData);
    expect(result).toEqual(newData);
  });

  test('addItem should throw an error on failure', async () => {
    const newData = { name: 'New Item' };
    const data = { success: false };
    axios.post.mockResolvedValue({ data });

    await expect(addItem(newData)).rejects.toThrowError('Unexpected response format');
  });


  afterEach(() => {
    jest.clearAllMocks();
  });
});
