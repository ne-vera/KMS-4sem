using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Task11_2 : MonoBehaviour
{

            public float minX; public float maxX;
            public float minZ; public float maxZ;

            public float nX; public float nY; public float nZ;
            public GameObject prefub1;

        void Start()
        {

            MeshRenderer rend = gameObject.GetComponent<MeshRenderer>();
            // Start is called before the first frame update
            minX = rend.bounds.min.x; maxX = rend.bounds.max.x;
            minZ = rend.bounds.min.z; maxZ = rend.bounds.max.z;
            nY = gameObject.transform.position.y + 5;
        }

    // Update is called once per frame

    void Update()
    {
        nX = Random.Range(minX, maxX);
        nZ = Random.Range(minZ, maxZ);

        if (Input.GetKeyDown(KeyCode.Q))
        //генерация объекта cub из примитива типа Cube
        {
            GameObject cub = GameObject.CreatePrimitive(PrimitiveType.Cube);
            cub.transform.position = new Vector3(nX, nY, nZ);
            //добавление к объекту cub компоненты Rigidbody с гравитацией
            cub.AddComponent<Rigidbody>();
        }
        //поворот плоскости для «сбрасывания» оставшихся на ней кубиков
        if (Input.GetKeyDown(KeyCode.W))
        {
            Quaternion rotZ = Quaternion.AngleAxis(-1, new Vector3(0, 0, 1));
            transform.rotation *= rotZ;
        }

        if (Input.GetKeyDown(KeyCode.Space))
        {
            Vector3 position = new Vector3(0, 10, 0); // позиция в центре сцены        
            Instantiate(prefub1, position, Quaternion.identity);
        }
    }
}
