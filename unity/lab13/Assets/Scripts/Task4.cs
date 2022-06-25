using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Task4 : MonoBehaviour
{
    private Camera cam1;
    // Start is called before the first frame update
    void Start()
    {
        cam1 = GetComponent<Camera>();
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        { 
            Ray ray = cam1.ScreenPointToRay(Input.mousePosition);      
 
            RaycastHit hit;
            if (Physics.Raycast(ray, out hit))
            {
      
                GameObject sphere = GameObject.CreatePrimitive(PrimitiveType.Sphere);  
                Vector3 pos = hit.point;
               
                sphere.transform.position = pos;
            }
        }
    }
}
